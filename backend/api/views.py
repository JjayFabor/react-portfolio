from django.http import JsonResponse
import json
import random

def api(request):
  # JSON array of inspirational quotes
  quotes_json = '''
  [
      {
          "quote": "The best way to predict the future is to create it.",
          "author": "Peter Drucker"
      },
      {
          "quote": "Whether you think you can or you think you can't, you're right.",
          "author": "Henry Ford"
      },
      {
          "quote": "The only limit to our realization of tomorrow is our doubts of today.",
          "author": "Franklin D. Roosevelt"
      },
      {
          "quote": "Act as if what you do makes a difference. It does.",
          "author": "William James"
      },
      {
          "quote": "Success is not how high you have climbed, but how you make a positive difference to the world.",
          "author": "Roy T. Bennett"
      },
      {
          "quote": "The only way to do great work is to love what you do.",
          "author": "Steve Jobs"
      },
      {
          "quote": "The purpose of our lives is to be happy.",
          "author": "Dalai Lama"
      },
      {
          "quote": "Life is what happens when you're busy making other plans.",
          "author": "John Lennon"
      },
      {
          "quote": "Get busy living or get busy dying.",
          "author": "Stephen King"
      },
      {
          "quote": "You have within you right now, everything you need to deal with whatever the world can throw at you.",
          "author": "Brian Tracy"
      },
      {
          "quote": "Believe you can and you're halfway there.",
          "author": "Theodore Roosevelt"
      },
      {
          "quote": "Your time is limited, don't waste it living someone else's life.",
          "author": "Steve Jobs"
      },
      {
          "quote": "Dream big and dare to fail.",
          "author": "Norman Vaughan"
      },
      {
          "quote": "Do what you can, with what you have, where you are.",
          "author": "Theodore Roosevelt"
      },
      {
          "quote": "You are never too old to set another goal or to dream a new dream.",
          "author": "C.S. Lewis"
      },
      {
          "quote": "It does not matter how slowly you go as long as you do not stop.",
          "author": "Confucius"
      },
      {
          "quote": "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
          "author": "Christian D. Larson"
      },
      {
          "quote": "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
          "author": "Ralph Waldo Emerson"
      }
  ]
  '''

  # Load the JSON data
  quotes = json.loads(quotes_json)

  # Randomly select a quote
  selected_quote = random.choice(quotes)
  return JsonResponse(selected_quote)