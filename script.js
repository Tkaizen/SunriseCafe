
// Menu data
const menuData = {
  breakfast: [
    {
      name: "Sunrise Special",
      price: "$12.95",
      description: "Two eggs any style, choice of bacon or sausage, breakfast potatoes, toast",
      popular: true
    },
    {
      name: "Avocado Toast",
      price: "$10.95",
      description: "Whole grain toast topped with mashed avocado, cherry tomatoes, microgreens"
    },
    {
      name: "Buttermilk Pancakes",
      price: "$9.95",
      description: "Stack of fluffy pancakes with maple syrup and butter"
    },
    {
      name: "Veggie Omelette",
      price: "$11.95",
      description: "Three egg omelette with bell peppers, spinach, mushrooms, and cheese"
    }
  ],
  lunch: [
    {
      name: "Cafe Burger",
      price: "$14.95",
      description: "1/3 lb beef patty with lettuce, tomato, cheddar, and special sauce on brioche",
      popular: true
    },
    {
      name: "Cobb Salad",
      price: "$13.95",
      description: "Mixed greens with grilled chicken, bacon, egg, avocado, blue cheese"
    },
    {
      name: "Grilled Cheese",
      price: "$10.95",
      description: "Sourdough bread with three cheese blend, served with tomato soup"
    },
    {
      name: "Veggie Wrap",
      price: "$12.95",
      description: "Hummus, roasted vegetables, mixed greens, and feta in a spinach wrap"
    }
  ],
  coffee: [
    {
      name: "Espresso",
      price: "$3.50",
      description: "Double shot of our house blend"
    },
    {
      name: "Cappuccino",
      price: "$4.75",
      description: "Espresso with steamed milk and foam",
      popular: true
    },
    {
      name: "Cold Brew",
      price: "$4.95",
      description: "Slow-steeped for 24 hours for a smooth, rich flavor"
    },
    {
      name: "Sunrise Latte",
      price: "$5.50",
      description: "House specialty with vanilla, cinnamon, and caramel",
      popular: true
    }
  ],
  bakery: [
    {
      name: "Croissant",
      price: "$3.95",
      description: "Flaky, buttery French pastry"
    },
    {
      name: "Cinnamon Roll",
      price: "$4.50",
      description: "Warm roll with cinnamon swirl and cream cheese frosting",
      popular: true
    },
    {
      name: "Blueberry Muffin",
      price: "$3.95",
      description: "Made fresh daily with wild blueberries"
    },
    {
      name: "Chocolate Chip Cookie",
      price: "$2.95",
      description: "Baked fresh with semi-sweet chocolate chunks"
    }
  ]
};

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize the year in the footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Handle navbar scroll effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');
  
  mobileToggle.addEventListener('click', function() {
    mobileToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
  
  // Close mobile menu when clicking a link
  const navItems = document.querySelectorAll('.nav-links a');
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      mobileToggle.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
  
  // Tab functionality for menu
  const tabButtons = document.querySelectorAll('.tab-btn');
  
  // Initialize menu content
  populateMenuCategories();
  
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const category = this.getAttribute('data-category');
      
      // Update active tab button
      tabButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Update active tab content
      const menuCategories = document.querySelectorAll('.menu-category');
      menuCategories.forEach(cat => cat.classList.remove('active'));
      document.getElementById(category).classList.add('active');
    });
  });
  
  // Form submission handler
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      // In a real application, you would send this data to a server
      // For now, just show an alert
      alert(`Thank you, ${name}! Your message has been sent. We'll get back to you soon.`);
      
      // Reset form
      contactForm.reset();
    });
  }
  
  // Newsletter form submission
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = this.querySelector('input').value;
      
      // In a real application, you would send this data to a server
      // For now, just show an alert
      alert(`Thank you for subscribing with ${email}!`);
      
      // Reset form
      newsletterForm.reset();
    });
  }
});

// Populate menu categories
function populateMenuCategories() {
  // Breakfast is already in HTML as an example, so we'll just add the other categories
  
  // Lunch
  const lunchContainer = document.getElementById('lunch');
  const lunchItemsHTML = createMenuItemsHTML(menuData.lunch);
  lunchContainer.innerHTML = `<div class="menu-items">${lunchItemsHTML}</div>`;
  
  // Coffee
  const coffeeContainer = document.getElementById('coffee');
  const coffeeItemsHTML = createMenuItemsHTML(menuData.coffee);
  coffeeContainer.innerHTML = `<div class="menu-items">${coffeeItemsHTML}</div>`;
  
  // Bakery
  const bakeryContainer = document.getElementById('bakery');
  const bakeryItemsHTML = createMenuItemsHTML(menuData.bakery);
  bakeryContainer.innerHTML = `<div class="menu-items">${bakeryItemsHTML}</div>`;
}

// Helper function to create menu items HTML
function createMenuItemsHTML(items) {
  return items.map(item => {
    return `
      <div class="menu-item">
        <div class="item-header">
          <h3>${item.name}</h3>
          <span class="price">${item.price}</span>
        </div>
        <p class="description">${item.description}</p>
        ${item.popular ? '<span class="popular-tag">Popular Choice</span>' : ''}
      </div>
    `;
  }).join('');
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust for navbar height
        behavior: 'smooth'
      });
    }
  });
});