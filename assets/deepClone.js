export default {
    deepClone: function (data) {
        const type = this.judgeType(data);
        let obj = null;
        if (type == 'array') {
            obj = [];
            for (let i = 0; i < data.length; i++) {
                obj.push(this.deepClone(data[i]));
            }
        } else if (type == 'object') {
            obj = {}
            for (let key in data) {
                if (data.hasOwnProperty(key)) {
                    obj[key] = this.deepClone(data[key]);
                }
            }
        } else {
            return data;
        }
        return obj;
    }
}