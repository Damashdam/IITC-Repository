export function addToLocalStorage() {
    let id_oper = id_transaction;
    let objTransaction = {
        'id': id_oper,
        'operation': selectOperation.value,
        'value': valueOperation.value,
        'description': descriptionOperation.value
    }
    arr_transaction.push(objTransaction);

    localStorage.setItem('transaction', JSON.stringify(arr_transaction));
}

export function loadData() {
    flagLoad = true;
    let data = JSON.parse(localStorage.getItem('transaction'));
    arr_transaction = data ? data : [];

    if (data) {
        for (let i = 0; i < data.length; i++) {
            if (data[i].operation == '+') {
                addIncome(data[i].id, data[i].description, data[i].value);
            } else if (data[i].operation == '-') {
                addExpenses(data[i].id, data[i].description, data[i].value);
            }
        }
        updateTotal();
    }
    flagLoad = false;
    updatePercentages();
}
