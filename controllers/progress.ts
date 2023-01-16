import apiCtrl from './api.controller';


export default {test};

function test(req: any, res: any) {

    console.log('working');
    return apiCtrl.apiSuccess(res, 'working');
}


