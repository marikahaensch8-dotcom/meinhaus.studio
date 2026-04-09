#!/usr/bin/env python3
"""Local dev server with clean URLs (like GitHub Pages)."""
import http.server
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

class CleanURLHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def do_GET(self):
        path = self.path.split("?")[0].split("#")[0]

        # Always check for .html file first, even if a directory exists
        if "." not in os.path.basename(path) and path != "/":
            clean = path.rstrip("/")
            html_path = os.path.join(ROOT, clean.lstrip("/") + ".html")
            if os.path.isfile(html_path):
                self.path = clean + ".html"

        return super().do_GET()

if __name__ == "__main__":
    server = http.server.HTTPServer(("", 8000), CleanURLHandler)
    print("Server running at http://localhost:8000")
    server.serve_forever()
