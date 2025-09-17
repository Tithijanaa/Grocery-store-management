 ==> Grocery Store Management System (GSMS)

A full-stack *Grocery Store Management System* web application built with *Python Flask, **MySQL, and **Bootstrap*. It allows store owners to manage products, place orders, and track sales through a user-friendly dashboard.

 ==> Features
- Dashboard:View and manage orders efficiently.
- Place Orders:Add customer orders with a dynamic order form.
- Product Management: Add, view, and manage grocery products.
- Responsive UI: Built with Bootstrap for mobile-friendly and modern design.
- Real-time Feedback: Popups and thank-you messages for actions like order submission and product addition.
- Database Integration: Uses MySQL to store all product and order details.

==> Technology Stack
- Frontend: HTML, CSS, Bootstrap, JavaScript  
- Backend: Python Flask  
- Database: MySQL  
- Others: jQuery for dynamic content  

==> Setup Instructions

1. Clone the repository:
bash:-https://github.com/Tithijanaa/Grocery-store-management.git

2. Create a virtual environment and activate it:
python -m venv venv
 * Windows
venv\Scripts\activate
* Linux/Mac
source venv/bin/activate


3. Install required packages:
pip install -r requirements.txt


4. Set up MySQL database:
Create a database named grocery_store.
Import tables: products, orders, order_details, uom.
Update credentials in sql_connection.py.



5. Run the Flask server:
python backend/server.py

6. Open the frontend:
Open ui/index.html in your browser.

==>Screenshots
1. Dashboard:
         ![WhatsApp Image 2025-09-17 at 18 50 08_4617a84c](https://github.com/user-attachments/assets/30fc1872-74a1-4180-afd4-d44d832cbdfc)
2.Place Orders:
         ![WhatsApp Image 2025-09-17 at 18 51 24_8ad3c134](https://github.com/user-attachments/assets/fa2818a7-9999-4d7e-9944-ce3e2b898570)
3.Manage Products:
         ![WhatsApp Image 2025-09-17 at 18 50 43_97822624](https://github.com/user-attachments/assets/a9e9eb9d-1065-491f-b6a2-2a97fa3fdc91)
 4.Backend:
   <img width="558" height="152" alt="image" src="https://github.com/user-attachments/assets/7b72e7e0-f4c1-43a0-9bae-f269b5dbc865" />

==> How It Works

1. Dashboard: Shows a welcome message with navigation to place orders or manage products.
2. Place Orders: Choose a customer name and products from a dropdown, submit, and see a popup with a thank-you message.
3. Manage Products: Add new products dynamically with a popup confirmation; products are listed in a table below.
4. Backend: Flask APIs handle requests to insert and fetch products/orders in MySQL.


==>Contact
For questions or suggestions, contact Tithi Jana at janatithi0@gmail.com.
