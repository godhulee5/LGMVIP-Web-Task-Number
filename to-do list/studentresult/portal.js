document.addEventListener("DOMContentLoaded", function () {
  // Show popup
  window.showPopup = function (popupId) {
    document.getElementById(popupId).style.display = "flex";
  };

  // Close popup
  window.closePopup = function (popupId) {
    document.getElementById(popupId).style.display = "none";
  };

  // Insert Result
  document
    .getElementById("insertForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      let studentId = document.getElementById("insertStudentID").value.trim();
      let subject = document.getElementById("insertSubject").value.trim();
      let grade = document.getElementById("insertGrade").value.trim();

      if (!studentId || !subject || !grade) {
        alert("All fields are required!");
        return;
      }

      let uniqueId = new Date().getTime().toString();
      let results = JSON.parse(localStorage.getItem("results")) || [];
      let newResult = {
        id: uniqueId,
        student_id: studentId,
        subject: subject,
        grade: grade,
      };

      results.push(newResult);
      localStorage.setItem("results", JSON.stringify(results));

      displayResults();
      closePopup("insertPopup");
      document.getElementById("insertForm").reset();
    });

  // Update Result
  document
    .getElementById("updateForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      let recordId = document.getElementById("updateRecordID").value.trim();
      let newGrade = document.getElementById("updateGrade").value.trim();

      if (!recordId || !newGrade) {
        alert("All fields are required!");
        return;
      }

      let results = JSON.parse(localStorage.getItem("results")) || [];
      let updated = false;

      results = results.map((result) => {
        if (result.id === recordId) {
          result.grade = newGrade;
          updated = true;
        }
        return result;
      });

      if (updated) {
        localStorage.setItem("results", JSON.stringify(results));
        alert("Result updated successfully.");
      } else {
        alert("Record not found.");
      }

      displayResults();
      closePopup("updatePopup");
      document.getElementById("updateForm").reset();
    });

  // Delete Result
  document
    .getElementById("deleteForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      let recordId = document.getElementById("deleteRecordID").value.trim();

      if (!recordId) {
        alert("Record ID is required!");
        return;
      }

      let results = JSON.parse(localStorage.getItem("results")) || [];
      let initialLength = results.length;

      results = results.filter((result) => result.id !== recordId);

      if (results.length < initialLength) {
        localStorage.setItem("results", JSON.stringify(results));
        alert("Result deleted successfully.");
      } else {
        alert("Record not found.");
      }

      displayResults();
      closePopup("deletePopup");
      document.getElementById("deleteForm").reset();
    });

  // Display all results
  function displayResults() {
    let resultsContainer = document.getElementById("resultDisplay");
    let results = JSON.parse(localStorage.getItem("results")) || [];
    if (results.length > 0) {
      let table =
        "<table><thead><tr><th>Record ID</th><th>Student ID</th><th>Subject</th><th>Grade</th></tr></thead><tbody>";
      results.forEach((row) => {
        table += `<tr><td>${row.id}</td><td>${row.student_id}</td><td>${row.subject}</td><td>${row.grade}</td></tr>`;
      });
      table += "</tbody></table>";
      resultsContainer.innerHTML = table;
    } else {
      resultsContainer.innerHTML = "<p>No results available.</p>";
    }
  }

  // Initial display of results
  displayResults();
});
