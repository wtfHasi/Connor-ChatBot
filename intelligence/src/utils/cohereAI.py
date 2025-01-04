#!/usr/bin/env python
# coding: utf-8

# In[1]:


import cohere


# In[2]:


# Initialize Cohere client with your API key
co = cohere.Client('JumbNC1BErT5ybzEXD2cAJQEuXcHBJzulYZwe4ii')  # Replace with your actual API key


# In[3]:


def add_preamble(user_message):
    preamble = (
        "You are a personalized chatbot named Connor. "
        "Your purpose is to assist users with various tasks, provide helpful information, and engage in friendly conversation. "
        "Be empathetic, informative, and concise in your responses. "
        "Now, let's assist the user with their request."
        "\n\nUser's message: "
    )
    return f"{preamble}{user_message}"


# In[4]:


def generate_response(user_message):
    # Add the preamble to the user's message
    prompt = add_preamble(user_message)

    # Generate a response using Cohere
    response = co.generate(
        model='command-xlarge-nightly',
        prompt=prompt,
        max_tokens=100,
        temperature=0.7,
        k=0,
        stop_sequences=[],
        return_likelihoods='NONE'
    )
    return response.generations[0].text.strip()


# In[11]:


if __name__ == '__main__':
    import sys
    user_message = sys.argv[1]
    response = generate_response(user_message)
    print(response)

# In[ ]:




