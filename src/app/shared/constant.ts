import { HttpHeaders } from '@angular/common/http';
​
export const API_URL = 'https://spendcontrol-vasanthakumar-in.osc-sbx-exp-ap-15768375-f72ef11f3ab089a8c677044eb28292cd-0001.us-east.containers.appdomain.cloud';

//https://spendcontrol-vasanthakumar-in.osc-sbx-exp-ap-15768375-f72ef11f3ab089a8c677044eb28292cd-0001.us-east.containers.appdomain.cloud/swagger-ui.html

export const SPEND_TYPE: Array<any> = [
    { option: "Card", value: "card", checked: false },
    { option: "Account", value: "account", checked: false }
];