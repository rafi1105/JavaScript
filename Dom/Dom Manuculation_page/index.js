// DOM Manipulation Learning Hub - Interactive JavaScript

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // 🛒 Shopping Cart Counter
    let cartCount = 0;
    const cartElement = document.getElementById('cart-count');
    const addBtn = document.getElementById('add-to-cart');
    const removeBtn = document.getElementById('remove-from-cart');

    if (addBtn) {
        addBtn.addEventListener('click', () => {
            cartCount++;
            cartElement.textContent = cartCount;
            cartElement.style.transform = 'scale(1.2)';
            setTimeout(() => cartElement.style.transform = 'scale(1)', 200);
        });
    }

    if (removeBtn) {
        removeBtn.addEventListener('click', () => {
            if (cartCount > 0) {
                cartCount--;
                cartElement.textContent = cartCount;
                cartElement.style.transform = 'scale(0.8)';
                setTimeout(() => cartElement.style.transform = 'scale(1)', 200);
            }
        });
    }

    // 🌙 Dark Mode Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const themeDemo = document.getElementById('theme-demo');
    let isDark = false;

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            isDark = !isDark;
            if (isDark) {
                themeDemo.classList.add('dark-theme');
                themeToggle.textContent = '☀️ Toggle Theme';
            } else {
                themeDemo.classList.remove('dark-theme');
                themeToggle.textContent = '🌙 Toggle Theme';
            }
        });
    }

    // 📝 Live Form Validation
    const emailInput = document.getElementById('email-input');
    const passwordInput = document.getElementById('password-input');
    const emailFeedback = document.getElementById('email-feedback');
    const passwordFeedback = document.getElementById('password-feedback');

    if (emailInput) {
        emailInput.addEventListener('input', (e) => {
            const email = e.target.value;
            const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            
            if (email === '') {
                emailFeedback.textContent = '';
                emailFeedback.className = 'feedback';
            } else if (isValid) {
                emailFeedback.textContent = '✅ Valid email format';
                emailFeedback.className = 'feedback success';
            } else {
                emailFeedback.textContent = '❌ Invalid email format';
                emailFeedback.className = 'feedback error';
            }
        });
    }

    if (passwordInput) {
        passwordInput.addEventListener('input', (e) => {
            const password = e.target.value;
            const strength = password.length >= 8 ? 'Strong' : 
                            password.length >= 6 ? 'Medium' : 'Weak';
            
            if (password === '') {
                passwordFeedback.textContent = '';
                passwordFeedback.className = 'feedback';
            } else {
                passwordFeedback.textContent = `Password strength: ${strength}`;
                passwordFeedback.className = `feedback ${strength === 'Strong' ? 'success' : 'error'}`;
            }
        });
    }

    // 📊 Live Data Dashboard
    const viewsCount = document.getElementById('views-count');
    const usersCount = document.getElementById('users-count');
    const updateBtn = document.getElementById('update-stats');

    function animateNumber(element, start, end) {
        const duration = 1000;
        const startTime = performance.now();
        
        function updateNumber(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const current = Math.floor(start + (end - start) * progress);
            element.textContent = current.toLocaleString();
            
            if (progress < 1) {
                requestAnimationFrame(updateNumber);
            }
        }
        
        requestAnimationFrame(updateNumber);
    }

    if (updateBtn) {
        updateBtn.addEventListener('click', () => {
            // Simulate real-time data updates
            const newViews = Math.floor(Math.random() * 10000) + 1000;
            const newUsers = Math.floor(Math.random() * 1000) + 100;
            
            // Animate the number change
            animateNumber(viewsCount, parseInt(viewsCount.textContent.replace(/,/g, '')), newViews);
            animateNumber(usersCount, parseInt(usersCount.textContent), newUsers);
        });
    }

    // 🔍 Search Filter
    const searchInput = document.getElementById('search-input');
    const searchList = document.getElementById('search-list');
    
    if (searchInput && searchList) {
        const items = searchList.querySelectorAll('li');

        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            
            items.forEach(item => {
                const text = item.textContent.toLowerCase();
                const category = item.dataset.category;
                
                if (text.includes(searchTerm) || category.includes(searchTerm)) {
                    item.classList.remove('hidden');
                    item.style.display = 'block';
                } else {
                    item.classList.add('hidden');
                    item.style.display = 'none';
                }
            });
            
            // Show "No results" message if all items are hidden
            const visibleItems = Array.from(items).filter(item => !item.classList.contains('hidden'));
            if (visibleItems.length === 0 && searchTerm !== '') {
                if (!document.getElementById('no-results')) {
                    const noResults = document.createElement('li');
                    noResults.id = 'no-results';
                    noResults.textContent = 'No results found';
                    noResults.style.fontStyle = 'italic';
                    searchList.appendChild(noResults);
                }
            } else {
                const noResults = document.getElementById('no-results');
                if (noResults) noResults.remove();
            }
        });
    }

    // 📋 Todo List Manager
    const todoInput = document.getElementById('todo-input');
    const addTodoBtn = document.getElementById('add-todo');
    const todoList = document.getElementById('todo-list');
    const totalTodos = document.getElementById('total-todos');
    const completedTodos = document.getElementById('completed-todos');

    let todos = [];

    // Make functions global for onclick handlers
    window.toggleTodo = function(id) {
        todos = todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        renderTodos();
    };

    window.deleteTodo = function(id) {
        todos = todos.filter(todo => todo.id !== id);
        renderTodos();
    };

    function addTodo() {
        const text = todoInput.value.trim();
        if (text === '') return;
        
        const todo = {
            id: Date.now(),
            text: text,
            completed: false
        };
        
        todos.push(todo);
        todoInput.value = '';
        renderTodos();
    }

    function renderTodos() {
        if (!todoList) return;
        
        todoList.innerHTML = '';
        
        todos.forEach(todo => {
            const li = document.createElement('li');
            li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
            li.innerHTML = `
                <span class="todo-text">${todo.text}</span>
                <div class="todo-actions">
                    <button class="todo-btn" onclick="toggleTodo(${todo.id})">
                        ${todo.completed ? '↩️' : '✅'}
                    </button>
                    <button class="todo-btn" onclick="deleteTodo(${todo.id})">🗑️</button>
                </div>
            `;
            todoList.appendChild(li);
        });
        
        // Update stats
        if (totalTodos) totalTodos.textContent = todos.length;
        if (completedTodos) completedTodos.textContent = todos.filter(todo => todo.completed).length;
    }

    if (addTodoBtn) {
        addTodoBtn.addEventListener('click', addTodo);
    }

    if (todoInput) {
        todoInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') addTodo();
        });
    }

    // Solution Tab Navigation
    const tabBtns = document.querySelectorAll('.tab-btn');
    const solutionTabs = document.querySelectorAll('.solution-tab');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabName = btn.dataset.tab;
            
            // Remove active class from all tabs and buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            solutionTabs.forEach(tab => tab.classList.remove('active'));
            
            // Add active class to clicked button and corresponding tab
            btn.classList.add('active');
            const targetTab = document.getElementById(`${tabName}-solution`);
            if (targetTab) {
                targetTab.classList.add('active');
            }
        });
    });

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    console.log('🎉 DOM Manipulation Learning Hub loaded successfully!');
    console.log('All interactive examples are now functional.');
});