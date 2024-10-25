const hueSlider = document.getElementById('hue-slider');
const hueValueInput = document.getElementById('hue-value');
function updateHue(hue) {
            hueSlider.value = hue;
            hueValueInput.value = hue;
            document.documentElement.style.setProperty('--hue', hue);
            hue = Number(hue);
            let ahue = hue + 60; ;
            let a2hue = hue + 300;
            if (hue > 300) {
                ahue = hue + 60 - 360;
            }
            if (hue > 60) {
                a2hue = hue + 300 - 360;
            }
            code.textContent = `:root {
        --color-primary: hsl(${hue}, 50%, 90%);
        --color-secondary: hsl(${hue}, 50%, 10%);
        --color-tertiary: hsl(${ahue}, 80%, 20%);
        --color-accent: hsl(${a2hue}, 80%, 20%);
    }
.dark {
        --color-primary: hsl(${hue}, 50%, 10%);
        --color-secondary: hsl(${hue}, 50%, 90%);
        --color-tertiary: hsl(${ahue}, 80%, 80%);
        --color-accent: hsl(${a2hue}, 80%, 80%);
    }`  
        }
        hueSlider.addEventListener('input', function () {
            updateHue(hueSlider.value);
        });
        hueValueInput.addEventListener('input', function () {
            const hue = hueValueInput.value;
            if (hue >= 0 && hue <= 360) {
                updateHue(hue);
            }
        });
        function dark() {
                document.body.classList.toggle("dark");
}
// copy button
document.addEventListener("DOMContentLoaded", function () {
  const copyButton = document.querySelector(".copy-btn");
    copyButton.addEventListener("click", () => {
      const preElement = copyButton.parentElement;
      const code = preElement.textContent.trim().replace("Copy", "").trim();

      navigator.clipboard.writeText(code).then(() => {
        copyButton.textContent = "Copied";
        setTimeout(() => {
          copyButton.textContent = "Copy";
        }, 2000);
      });
    });
  });
