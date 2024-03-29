import {mixins}    from 'vue-class-component';
import {Component} from 'vue-property-decorator';
import MainMixin   from '@/mixins/Main';
import FormMixin   from '@/mixins/Form';

@Component({
    name: `RegistrationLoginFormMixin`
})
export default class RegistrationLoginFormMixin extends mixins(MainMixin, FormMixin)
{
    public async availabilityCheck({element}: {element: FormElement}): Promise<void>
    {
        if (element.unique === false)
        {
            return;
        }

        if (element.input !== `password` && !element.validateRegex.test(element.value))
        {
            element.errorShow = false;
        }

        if (element.input === `password` || !element.validateRegex.test(element.value))
        {
            return;
        }

        element.checking = true;

        await this.$http.get(`https://api.${this.hostname}/users`, {[element.name]: element.value}).then(() =>
        {
            element.taken = true;
        }).catch(() =>
        {
            element.taken = false;
        }).finally(() =>
        {
            element.checking = false;
            this.computedPropertiesUpdate({element});
        });
    }

    public blurOn({element}: {element: FormElement}): void
    {
        this.availabilityCheck({element}).catch(console.error);
        element.inputting = false;
        element.alertType = this.alertTypeGet({element});
        this.errorShowUpdate({element});
    }
}
