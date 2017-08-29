class MainController {
    constructor() {
        this.message = "Calculator";
        this.input1 = 0;
        this.input2 = 0;
        this.results = 0;
    }
add() {
    this.results = (this.input1 + this.input2);
}
subtract() {
    this.results = (this.input1 - this.input2);
}
multiply() {
    this.results = (this.input1 * this.input2);
}
divide() {
    this.results = (this.input1 / this.input2);
}

}