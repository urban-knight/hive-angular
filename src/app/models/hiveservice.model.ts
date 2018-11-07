export class HiveService {
    public url: string;
    public name: string;
    public desc: string;
    public ext_desc: string;

    constructor(s) {
        this.url = s.url;
        this.name = s.name;
        this.desc = s.desc;
        this.ext_desc = s.ext_desc;
    }
}
