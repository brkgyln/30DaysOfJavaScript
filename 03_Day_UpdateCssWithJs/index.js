let root = document.documentElement;

const inputs = document.querySelectorAll('.controller input');

function handleUpdate() {
    // the suffix is for the data-sizing that has 'px' already set
    // or nothing is because we'd get undefined for color
    const suffix = this.dataset.sizing || '';
    // console.log(suffix);
    // name is the property of the input
    root.style.setProperty(`--${(this.name)}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));