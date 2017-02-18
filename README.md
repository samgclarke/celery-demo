To Install:

1. Clone project:
        
        git@github.com:samgclarke/celery-demo.git

2. Install dependencies:

        pip install -r requirements.txt

3. Run Flask development server:

        python runserver.py

4. In a *seperate* terminal (but the same virtualenv, at the root of this project), run a celery worker:

        celery worker -A app.celery --log-level=debug

5. Navigate to 127.0.0.1:5000 in your browser, and open the dev console to see some (maybe) meaningful messages.