// ----------------------------------------- TASK 1 ----------------------------------------

let lastAccountNum = 1000000000;

function newBankAccount(customerInfo) {

    // ------------------ Input Validation ------------------

    if (typeof customerInfo.firstName !== 'string' || customerInfo.firstName.trim() === '' || customerInfo.firstName.length <= 2) {
        return "Error: First Name must be string and not less than 2 letters or empty";
    }

    if (typeof customerInfo.lastName !== 'string' ||
        customerInfo.lastName.trim() === '' ||
        customerInfo.lastName.length <= 2) {
        return "Error: Last Name must be string and not less than 2 letters or empty";
    }

    if (typeof customerInfo.initialDeposit !== 'number' || customerInfo.initialDeposit < 50) {
        return "Error: Initial deposit must be a number and at least $50";
    }

    lastAccountNum++;

    const accountNum = lastAccountNum.toString();

    // ------------------ Create Customer Account ------------------

    const customer_account = {
        accountNumber: accountNum,
        firstName: customerInfo.firstName.trim(),
        lastName: customerInfo.lastName.trim(),
        balance: customerInfo.initialDeposit,
        createdAt: new Date().toISOString()
    }

    return customer_account;

}

// ----------------------------------------- TASK 2 ----------------------------------------

function deposit(account, moneyToDeposit) {
    // ------------------ Deposited Money Validation ------------------

    if (moneyToDeposit <= 0) {
        return "Error: Deposited Money must be positive value"
    }

    // ------------------ Create New Transaction History ------------------
    const depositTransaction = {
        type: "DEPOSIT",
        amount: moneyToDeposit,
        date: new Date().toISOString(),
        newBalance: account.balance + moneyToDeposit
    }

    // ------------------ Update Account ------------------

    account.transactions.push(depositTransaction);
    account.balance += moneyToDeposit;

    return account;
}

// ----------------------------------------- TASK 3 ----------------------------------------

function withdrawalMoney(account, moneyToWithdraw) {

    if (moneyToWithdraw > account.balance) {
        const penalty = 5;
        account.balance -= 5;

        const penaltyTransaction = {
            type: "OVERDRAFT_ATTEMPT",
            amount: moneyToWithdraw,
            date: new Date().toISOString(),
            penalty: 5
        }

        account.transactions.push(penaltyTransaction);

        console.log(`Withdrawal rejected for account ${account.accountNumber}: Insufficient funds. $${penalty} penalty applied.`);
        return account;
    }
    else {
        account.balance -= moneyToWithdraw;

        const withdrawTransaction = {
            type: "WITHDRAWAL",
            amount: moneyToWithdraw,
            date: new Date().toISOString(),
            newBalance: account.balance
        }

        account.transactions.push(withdrawTransaction);
        console.log(`Withdrawal successful for account ${account.accountNumber}. New balance: $${account.balance}`);
        return account;
    }
}


// ----------------------------------------- TASK 4 ----------------------------------------

function transferMoney(fromAccount, toAccount, amount) {
    if (!fromAccount || typeof fromAccount !== 'object' || !toAccount || typeof toAccount !== 'object') {
        return "Invalid account provided. Both 'fromAccount' and 'toAccount' must be valid objects.";
    }

    if (amount <= 0) {
        return "Transfer amount must be positive.";
    }

    if (fromAccount.balance < amount) {
        return `Insufficient funds in account ${fromAccount.accountNumber}. Available: ${fromAccount.balance}, Needed: ${amount}`;
    }

    fromAccount.balance -= amount;
    toAccount.balance += amount;
    const date = new Date().toISOString();

    fromAccount.transactions = [];
    toAccount.transactions = [];

    fromAccount.transactions.push({
        type: "TRANSFER_OUT",
        to: toAccount.accountNumber,
        amount: amount,
        date: date
    })

    toAccount.transactions.push({
        type: "TRANSFER_IN",
        from: fromAccount.accountNumber,
        amount: amount,
        datedate: date
    })
}

// ----------------------------------------- TASK 5 ----------------------------------------

function calculateMonthlyInterest(account) {
    const monthlyInterest = 0.00167;
    if (account.balance <= 500) {
        return `Account ${account.accountNumber} balance is $${account.balance}, which is not greater than $500. No interest applied.`;
    }

    const interestAmount = account.balance * monthlyInterest;

    account.balance += interestAmount;

    account.transactions = [];

    account.transactions.push({
        type: "INTEREST",
        amount: interestAmount,
        date: new Date().toISOString()
    })
    return account;
}

// ----------------------------------------- TASK 6 ----------------------------------------

function filterTransactions(account, { startDate, endDate, type }) {
    const start = new Date(startDate);
    const end = new Date(endDate);

    return account.transactions
        .filter((tx) => {
            const txDate = new Date(tx.date);
            const isInDateRange = txDate >= start && txDate <= end;
            const isTypeMatch = tx.type === type;
            return isInDateRange && isTypeMatch;
        })
        .sort((a, b) => new Date(b.date) - new Date(a.date));
}


// ----------------------------------------- TASK 7 ----------------------------------------

function manageAccountFreeze(account, freeze, manager) {
    if (account.status === "FROZEN" && freeze === "FROZEN") {
        return "The account is already freezen";
    }

    account.statusHistory = [];

    account.status = freeze;

    account.statusHistory.push({
        action: freeze,
        by: manager,
        date: new Date().toISOString()
    });

    return account;
}

// ----------------------------------------- TASK 8 ----------------------------------------

function maxWithdraw(account, amount) {
    if (amount > 500) {
        return "Error: Daily withdrawal limit exceeded ($500 max)"
    }

    account.balance -= amount;

    account.transactions = [];

    account.transactions.push({
        type: "WITHDRAWAL",
        amount: amount,
        date: new Date().toISOString(),
        newBalance: account.balance
    });
}

// ----------------------------------------- TASK 9 ----------------------------------------

function validatePassword(password) {
    const reasons = [];

    // Minimum length
    if (password.length < 12) {
        reasons.push("Password must be at least 12 characters");
    }

    // Character types
    if (!/[a-z]/.test(password)) {
        reasons.push("Password must contain a lowercase letter");
    }
    if (!/[A-Z]/.test(password)) {
        reasons.push("Password must contain an uppercase letter");
    }
    if (!/[0-9]/.test(password)) {
        reasons.push("Password must contain a number");
    }
    if (!/[!@#$%^&*(),.?":{}|<>_\-+=~`[\]\\;/]/.test(password)) {
        reasons.push("Password must contain a special character");
    }

    // Common passwords
    const commonPasswords = [
        "password1234", "000000000000", "abc123123456789",
    ];
    const lowerPassword = password.toLowerCase();
    if (commonPasswords.includes(lowerPassword)) {
        reasons.push("Password is too common");
    }


    if (reasons.length === 0) {
        return { valid: true };
    } else {
        return {
            valid: false,
            reasons: reasons
        };
    }
}


// ----------------------------------------- TASK 10 ----------------------------------------

function checkForSuspiciousActivity(account) {
    const alerts = [];
    const transactions = account.transactions;

    // Sort transactions by date
    transactions.sort((a, b) => new Date(a.date) - new Date(b.date));

    // Alert on transactions > $10,000
    for (const tx of transactions) {
        if (tx.amount > 10000) {
            alerts.push(`High-value transaction: $${tx.amount} transfer`);
        }
    }

    //Alert on 3+ transactions within 5 minutes
    for (let i = 0; i < transactions.length; i++) {
        const sequence = [transactions[i]];
        const startTime = new Date(transactions[i].date);

        for (let j = i + 1; j < transactions.length; j++) {
            const currentTime = new Date(transactions[j].date);
            const diffInMinutes = (currentTime - startTime) / (1000 * 60);

            if (diffInMinutes <= 5) {
                sequence.push(transactions[j]);
                if (sequence.length >= 3) {
                    alerts.push(`Rapid ${transactions[i].type.toLowerCase()}s: ${sequence.length} transactions within ${Math.round(diffInMinutes)} minutes`);
                    break;
                }
            } else {
                break;
            }
        }
    }

    return {
        isSuspicious: alerts.length > 0,
        alerts
    };
}