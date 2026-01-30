const forms = document.querySelectorAll("form");

forms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const body = {};

    formData.append("form", form.classList.value);
    formData.forEach((value, key) => {
      body[key] = value;
    });

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json, charset=utf-8",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok. status: " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        closeModal();
        setTimeout(() => alert('данные отправлены'), 100);
      })
      .catch((error) => {
        alert(error);
      })
      .finally(() => {
        form.reset();
      });
  });
});

// сделал раньше.
