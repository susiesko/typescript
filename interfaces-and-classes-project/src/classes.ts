abstract class Department {
  protected employees: string[] = [];
  static fiscalYear: number = 2021;

  constructor(protected readonly id: string, public name: string) {}

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT');
  }

  describe() {
    console.log(`IT Department - ID: ${this.id}`);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {
    if (!value) throw new Error('Please pass in a valid value!');
    this.addReport(value);
  }

  private constructor(id: string, public reports: string[]) {
    super(id, 'IT');
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
  }

  describe() {
    console.log(`Accounting Department - ID: ${this.id}`);
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
  }
  printReports() {
    console.log(this.reports);
  }
}
const employee = Department.createEmployee('Max');
// console.log(employee, Department.fiscalYear);

const it = new ITDepartment('1', ['Max']);

it.addEmployee('Max');
it.addEmployee('Manu');
// console.log('it', it);
// it.describe();

const accounting = AccountingDepartment.getInstance();

accounting.mostRecentReport = 'test';
// console.log(accounting.mostRecentReport);
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
accounting.addReport('Something went wrong');
// accounting.printReports();

// accounting.describe();

// accounting.employees[2] = 'Anna';

// console.log('accounting', accounting);

//accounting.describe();

//const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
const accountingCopy = { ...accounting };
//console.log(accountingCopy);
//accountingCopy.describe();
