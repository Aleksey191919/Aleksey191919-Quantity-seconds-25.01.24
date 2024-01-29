function quantitySeconds () {
    const hours = +prompt("Введіть кількість годин:");
    if (!isNaN(hours))  {
        let result = hours * 3600;
        alert (`Кількість секунд: ${result}`);
    }
    else {
        alert ("Ви ввели не коректні дані");
    }
}

quantitySeconds();