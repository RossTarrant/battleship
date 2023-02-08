export const Ship = (len) => {
    const length = len;
    let hits = 0;
    const hit = function(){
        if(this.hits<this.length){
            this.hits += 1;
        }
    }

    const isSunk = function(){
        return this.hits === this.length ? true : false;
    }

    return {length, hit, hits, isSunk};
}