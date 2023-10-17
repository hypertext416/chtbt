from flask import Flask, request, render_template, jsonify
import openai

app = Flask(__name__)

# Replace 'YOUR_API_KEY' with your actual OpenAI API key
openai.api_key = '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'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/ask', methods=['POST'])
def ask():
    user_input = request.form['user_input']
    response = generate_response(user_input)
    return jsonify({'response': response})

def generate_response(input_text):
    # Use OpenAI GPT-3 to generate a response
    response = openai.Completion.create(
        engine="text-davinci-002",
        prompt=input_text,
        max_tokens=50  # Adjust as needed
    )
    return response.choices[0].text

if __name__ == '__main__':
    app.run(debug=True)
