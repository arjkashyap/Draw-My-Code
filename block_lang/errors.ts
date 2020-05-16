//////////////////////////////////
// ERRORS
//////////////////////////////////
export class Errors {
  errorName: string;
  errorDetails: string;

  constructor(errorName: string, errorDetails: string) {
    this.errorName = errorName;
    this.errorDetails = errorDetails;
  }

  displayError = () => `${this.errorName} \n ${this.errorDetails}`;
}

export class IllegalChar extends Errors {
  constructor(details: string) {
    super("Illegal Character", details);
  }
}
