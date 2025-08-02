function markAsComplete(course) {
  localStorage.setItem(`${course}_course_complete`, 'true');
  alert(`Marked ${course} course as complete!`);
}

window.onload = function () {
  const progressList = document.getElementById('progress-list');
  if (progressList) {
    const courses = ['python', 'web', 'data', 'design'];
    const courseNames = {
      python: 'Intro to Python',
      web: 'Web Development',
      data: 'Data Science Basics',
      design: 'UI/UX Design',
    };

    courses.forEach(course => {
      const isComplete = localStorage.getItem(`${course}_course_complete`);
      const li = document.createElement('li');
      li.textContent = `${courseNames[course]}: ${isComplete ? '✅ Completed' : '❌ Not Completed'}`;
      progressList.appendChild(li);
    });
  }
};
