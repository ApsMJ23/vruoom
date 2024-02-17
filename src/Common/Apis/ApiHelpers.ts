import {fetchNoStaffUsers, fetchProfile, postLogin} from "./ApiContainer";


export const loginUser = async (data:any): Promise<any> => {
    try {
        const res = await postLogin(data);
        if (res.status === 200) {
            return res?.data;
        }
        return false;
    } catch (err: any) {
        return err?.response?.data;
    }
};

export const getProfile = async (): Promise<any> => {
    try {
        const res = await fetchProfile();
        if (res.status === 200) {
            return res?.data;
        }
    }catch (err: any) {
        return err?.response?.data;
    }
}

export const getNoStaffUsers = async (): Promise<any> => {
    try {
        const res = await fetchNoStaffUsers();
        if (res.status === 200) {
            return res?.data;
        }
    }catch (err: any) {
        return err?.response?.data;
    }
}

