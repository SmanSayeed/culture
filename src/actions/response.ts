// response.ts
export interface Response<T = []> {
    success: boolean;
    data: T | [];
    message: string | null;
}

export const success = <T>(data: T, message: string = ""): Response<T> => {
    return {
        success: true,
        data: data || [],
        message: message || null,
    };
};

export const fail = <T>(message: string = ""): Response<T> => {
    return {
        success: false,
        data: [],
        message: message || null,
    };
};
