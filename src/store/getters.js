const getters = {
    total(state) {
        var sum = 0;
        for (var i = 0; i < state.carList.length; i++) {
            if (state.checked[i] == true)
                sum += parseInt(state.carList[i].currentPrice);
        }
        return sum * 100;
    },
    num(state) {
        let sum = 0;
        state.checked.forEach(function(item, index) {
            sum += item;
        });
        return sum;
    },
}

export default getters;