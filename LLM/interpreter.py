from flask import Flask, request, jsonify
import os
import subprocess

app = Flask(__name__)
base_dir = './exp'

@app.route('/files', methods=['POST'])
def handle_files():
    data = request.json
    action = data.get('action')
    filename = data.get('filename')
    content = data.get('content', '')

    if action == 'ls':
        try:
            files = os.listdir(base_dir)
            return jsonify(files), 200
        except Exception as e:
            return str(e), 500

    elif action == 'read':
        try:
            with open(os.path.join(base_dir, filename), 'r') as file:
                content = file.read()
            return jsonify(content), 200
        except Exception as e:
            return str(e), 500

    elif action == 'write':
        try:
            with open(os.path.join(base_dir, filename), 'w') as file:
                file.write(content)
            return 'File written successfully', 200
        except Exception as e:
            return str(e), 500

    else:
        return 'Invalid action', 400

@app.route('/shell', methods=['POST'])
def handle_shell():
    data = request.json
    commands = data.get('commands', [])

    if not commands:
        return 'No commands provided', 400

    try:
        results = []
        for command in commands:
            result = subprocess.run(command, shell=True, cwd=base_dir, capture_output=True, text=True)
            results.append({
                'command': command,
                'returncode': result.returncode,
                'stdout': result.stdout,
                'stderr': result.stderr
            })
        return jsonify(results), 200
    except Exception as e:
        return str(e), 500

if __name__ == '__main__':
    if not os.path.exists(base_dir):
        os.makedirs(base_dir)
    app.run(host='0.0.0.0', port=5000)