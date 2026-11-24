(function () {
  'use strict';

  var exercises = typeof DATOS_EJERCICIOS === 'undefined' ? [] : DATOS_EJERCICIOS;
  var activeExercise = null;
  var activeFile = null;
  var searchInput = document.getElementById('search');
  var exerciseList = document.getElementById('exercise-list');
  var fileTabs = document.getElementById('file-tabs');
  var sourceCode = document.getElementById('source-code');
  var copyButton = document.getElementById('copy-code');
  var copyFeedback = document.getElementById('copy-feedback');

  function normalized(value) {
    return String(value || '').toLocaleLowerCase();
  }

  function matchesSearch(exercise, query) {
    if (!query) return true;
    var searchable = [exercise.titulo, exercise.bloque, exercise.ruta, (exercise.temas || []).join(' ')];
    exercise.archivos.forEach(function (file) {
      searchable.push(file.nombre, file.ruta, file.contenido);
    });
    return normalized(searchable.join('\n')).indexOf(query) !== -1;
  }

  function renderList() {
    var query = normalized(searchInput.value.trim());
    var filtered = exercises.filter(function (exercise) { return matchesSearch(exercise, query); });
    exerciseList.replaceChildren();
    var groups = new Map();
    filtered.forEach(function (exercise) {
      if (!groups.has(exercise.bloque)) groups.set(exercise.bloque, []);
      groups.get(exercise.bloque).push(exercise);
    });
    Array.from(groups.entries()).sort(function (left, right) {
      return left[1][0].ordenBloque - right[1][0].ordenBloque;
    }).forEach(function (entry) {
      var groupName = entry[0];
      var items = entry[1];
      var heading = document.createElement('h2');
      heading.className = 'group-title';
      heading.textContent = groupName;
      exerciseList.appendChild(heading);
      items.forEach(function (exercise) {
        var button = document.createElement('button');
        button.type = 'button';
        button.className = 'exercise-button';
        button.dataset.exercise = exercise.ruta;
        button.setAttribute('aria-current', String(activeExercise === exercise));
        var icon = document.createElement('span');
        icon.className = 'exercise-icon';
        icon.setAttribute('aria-hidden', 'true');
        icon.textContent = 'JS';
        var name = document.createElement('span');
        name.className = 'exercise-name';
        name.textContent = exercise.titulo;
        button.append(icon, name);
        exerciseList.appendChild(button);
      });
    });
    document.getElementById('total-count').textContent = String(filtered.length);
    document.getElementById('list-empty').hidden = filtered.length > 0;
  }

  function selectExercise(exercise) {
    activeExercise = exercise;
    activeFile = exercise.archivos[0] || null;
    document.getElementById('welcome').hidden = true;
    document.getElementById('viewer').hidden = false;
    document.getElementById('exercise-block').textContent = exercise.bloque.toLocaleUpperCase();
    document.getElementById('exercise-title').textContent = exercise.titulo;
    document.getElementById('exercise-path').textContent = './' + exercise.ruta;
    var preview = document.getElementById('preview-frame');
    var openLink = document.getElementById('open-exercise');
    if (exercise.ejecucion) {
      preview.src = exercise.ejecucion;
      openLink.href = exercise.ejecucion;
      openLink.hidden = false;
    } else {
      preview.removeAttribute('src');
      openLink.hidden = true;
    }
    renderList();
    renderFiles();
  }

  function renderFiles() {
    fileTabs.replaceChildren();
    activeExercise.archivos.forEach(function (file, index) {
      var tab = document.createElement('button');
      tab.type = 'button';
      tab.className = 'file-tab';
      tab.setAttribute('role', 'tab');
      tab.setAttribute('aria-selected', String(activeFile === file));
      tab.setAttribute('aria-controls', 'source-code');
      tab.tabIndex = activeFile === file ? 0 : -1;
      tab.dataset.fileIndex = String(index);
      tab.textContent = file.nombre;
      fileTabs.appendChild(tab);
    });
    showFile(activeFile);
  }

  function showFile(file) {
    activeFile = file;
    sourceCode.textContent = file ? file.contenido : '';
    document.getElementById('active-file-path').textContent = file ? file.ruta : '';
    copyButton.disabled = !file;
    copyFeedback.textContent = '';
    Array.prototype.forEach.call(fileTabs.querySelectorAll('[role="tab"]'), function (tab) {
      var selected = activeExercise.archivos[Number(tab.dataset.fileIndex)] === file;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
    });
  }

  function announceCopied() {
    copyFeedback.textContent = 'Copiado';
  }

  function fallbackCopy() {
    var temporary = document.createElement('textarea');
    temporary.value = activeFile.contenido;
    temporary.setAttribute('readonly', '');
    temporary.style.position = 'fixed';
    temporary.style.opacity = '0';
    document.body.appendChild(temporary);
    temporary.select();
    try {
      copyFeedback.textContent = document.execCommand('copy') ? 'Copiado' : 'No se pudo copiar';
    } catch (error) {
      copyFeedback.textContent = 'No se pudo copiar';
    }
    temporary.remove();
  }

  exerciseList.addEventListener('click', function (event) {
    var button = event.target.closest('[data-exercise]');
    if (!button) return;
    var exercise = exercises.find(function (item) { return item.ruta === button.dataset.exercise; });
    if (exercise) selectExercise(exercise);
  });

  searchInput.addEventListener('input', renderList);

  fileTabs.addEventListener('click', function (event) {
    var tab = event.target.closest('[data-file-index]');
    if (tab && activeExercise) showFile(activeExercise.archivos[Number(tab.dataset.fileIndex)]);
  });

  fileTabs.addEventListener('keydown', function (event) {
    if (!['ArrowRight', 'ArrowLeft'].includes(event.key)) return;
    var tabs = Array.prototype.slice.call(fileTabs.querySelectorAll('[role="tab"]'));
    var current = tabs.indexOf(document.activeElement);
    var nextIndex = (current + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
    if (tabs[nextIndex]) tabs[nextIndex].focus();
  });

  copyButton.addEventListener('click', function () {
    if (!activeFile) return;
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(activeFile.contenido).then(announceCopied, fallbackCopy);
    } else {
      fallbackCopy();
    }
  });

  document.addEventListener('keydown', function (event) {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      searchInput.focus();
    }
  });

  var fileCount = exercises.reduce(function (total, exercise) { return total + exercise.archivos.length; }, 0);
  document.getElementById('welcome-exercises').textContent = String(exercises.length);
  document.getElementById('welcome-files').textContent = String(fileCount);
  renderList();
}());
