class reader{
    constructor(buffer, isLittleEndian) {
        this.dv = new DataView(data);
        this.buffer = data;
        this.isLittleEndian = isLittleEndian;
        this.offset = 0;
    }

    getUint8() {
        const val = this.dv.getUint8(this.offset);
        this.offset++;
        return val;
    }

    getUint16(isLittleEndian) {
        const isLE = this.isLittleEndian || isLittleEndian;
        const val = this.dv.getUint16(this.offset, isLE);
        this.offset += 2;
        return val;
    }

    getUint32(isLittleEndian) {
        const isLE = this.isLittleEndian || isLittleEndian;
        const val = this.dv.getUint32(this.offset, isLE);
        this.offset += 4;
        return val;
    }

    getFloat32(isLittleEndian) {
        const isLE = this.isLittleEndian || isLittleEndian;
        const val = this.dv.getFloat32(this.offset, isLE);
        this.offset += 4;
        return val;
    }

    getFloat64(isLittleEndian) {
        const isLE = this.isLittleEndian || isLittleEndian;
        const val = this.dv.getFloat64(this.offset, isLE);
        this.offset += 8;
        return val;
    }

    getString(len) {
        
    }
}
