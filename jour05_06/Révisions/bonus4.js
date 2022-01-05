function createPhoneNumber(numbers) {
    let stringed = numbers.toString().replaceAll(',', "").replaceAll(" ", ""),
        country = stringed.charAt(0) + stringed.charAt(1) + stringed.charAt(2),
        firstChain = stringed.charAt(3) + stringed.charAt(4) + stringed.charAt(5),
        secondChain = stringed.charAt(6) + stringed.charAt(7) + stringed.charAt(8) + stringed.charAt(9);

    const phoneNumber = `'(${country}) ${firstChain}-${secondChain}'`;
    console.log(phoneNumber);
}

createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])