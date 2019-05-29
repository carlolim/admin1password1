export const initialize = () => {
    var request = window.indexedDB.open("Admin1Password1", 5); //added work table
    
    request.onupgradeneeded = function(event) {
        var db = event.target.result;

        if (!db.objectStoreNames.contains('personal')) {
            let table = db.createObjectStore("personal", { keyPath: "personalId", autoIncrement: true });
            table.createIndex("description", "description", { unique: false });
            table.createIndex("firstName", "firstName", { unique: false });
            table.createIndex("lastName", "lastName", { unique: false });
            table.createIndex("middleName", "middleName", { unique: false });
            table.createIndex("contact", "contact", { unique: false });
            table.createIndex("birthday", "birthday", { unique: false });
            table.createIndex("picture", "picture", { unique: false });
            table.createIndex("nationality", "nationality", { unique: false });
            table.createIndex("gender", "gender", { unique: false });
            table.createIndex("religion", "religion", { unique: false });
            table.createIndex("civilStatus", "civilStatus", { unique: false });
        }

        if (!db.objectStoreNames.contains('faceDescriptor')) {
            let table = db.createObjectStore("faceDescriptor", { keyPath: "faceDescriptorId", autoIncrement: true});
            table.createIndex("personalId", "personalId", { unique: false });
            table.createIndex("value", "value", { unique: false });
        }

        if (!db.objectStoreNames.contains('government')) {
            let table = db.createObjectStore("government", { keyPath: "governmentId", autoIncrement: true});
            table.createIndex("personalId", "personalId", { unique: false });
            table.createIndex("description", "description", { unique: false });
            table.createIndex("sss", "sss", { unique: false });
            table.createIndex("tin", "tin", { unique: false });
            table.createIndex("philHealth", "philHealth", { unique: false });
            table.createIndex("pagibig", "pagibig", { unique: false });
            table.createIndex("prc", "prc", { unique: false });
            table.createIndex("passport", "passport", { unique: false });
            table.createIndex("taxStatus", "taxStatus", { unique: false });
        }
        
        if (!db.objectStoreNames.contains('work')) {
            let table = db.createObjectStore("work", { keyPath: "workId", autoIncrement: true});
            table.createIndex("personalId", "personalId", { unique: false });
            table.createIndex("description", "description", { unique: false });
            table.createIndex("jobTitle", "jobTitle", { unique: false });
            table.createIndex("employmentStatus", "employmentStatus", { unique: false });
            table.createIndex("dateFrom", "dateFrom", { unique: false });
            table.createIndex("isPresent", "isPresent", { unique: false });
            table.createIndex("companyAdress", "companyAdress", { unique: false });
            table.createIndex("companyContact", "companyContact", { unique: false });
            table.createIndex("dateTo", "dateTo", { unique: false });
            table.createIndex("company", "company", { unique: false });
        }
        
        if (!db.objectStoreNames.contains('bank')) {
            let table = db.createObjectStore("bank", { keyPath: "bankId", autoIncrement: true});
            table.createIndex("personalId", "personalId", { unique: false });
            table.createIndex("description", "description", { unique: false });
            table.createIndex("bankName", "bankName", { unique: false });
            table.createIndex("accountType", "accountType", { unique: false });
            table.createIndex("accountNumber", "accountNumber", { unique: false });
        }

        //SAMPLE UPGRADE
        // if (!db.objectStoreNames.contains('budget')) {
        //     var budgetTable = db.createObjectStore("budget", {keyPath: "budgetId", autoIncrement: true});
        //     budgetTable.createIndex("name", "name", { unique: false});
        // }
        // else {
        //     var budgetTable = event.currentTarget.transaction.objectStore("budget");
        //     if (!budgetTable.indexNames.contains("showInDashboard")) {
        //         budgetTable.createIndex("showInDashboard", "showInDashboard", { unique: false});
        //     }
        // }
    }

    request.onsuccess = function (event) {
        // var db = event.target.result;

        // //---------------------------------------
        // //create default account (personal)
        // //---------------------------------------
        // var transaction = db.transaction(["account"], "readonly");
        // var accountStore = transaction.objectStore("account");
        // var selectAccounts = accountStore.getAll();
        // transaction.oncomplete = function (event) {            
        //     if (selectAccounts.result.length === 0) {
        //         var addAccountTransaction = db.transaction(["account"], "readwrite");
        //         var accountStore1 = addAccountTransaction.objectStore("account");
        //         accountStore1.put({name: "Personal"});
        //     }
        // }
        // //----------------------------------------------------------------
        // //create default categories (food, transportation, clothing)
        // //----------------------------------------------------------------
        // var categoryTransaction = db.transaction(["category"], "readonly");
        // var categoryStore = categoryTransaction.objectStore("category");
        // var selectCategories = categoryStore.getAll();
        // categoryTransaction.oncomplete = function (event) {
        //     if (selectCategories.result.length === 0) {
        //         var addCategoriesTransaction = db.transaction(["category"], "readwrite");
        //         var addCategoryStore = addCategoriesTransaction.objectStore("category");
        //         addCategoryStore.put({name: "Food"});
        //         addCategoryStore.put({name: "Transportation"});
        //         addCategoryStore.put({name: "Clothing"});
        //     }
        // }
    }
}