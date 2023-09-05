export interface NasaApiParams {
    copyright:string;
    date:string;
    start?: string | null;
    end?: string | null;
    explanation:string;
    hdurl:string;
    media_type:string;
    service_version:string;
    title:string;
    url:string;
}

export const initSearch: NasaApiParams = {
    copyright: '',
    date: '',
    start: '',
    end: '',
    explanation: '',
    hdurl: '',
    media_type: '',
    service_version: '',
    title: '',
    url: ''
};
