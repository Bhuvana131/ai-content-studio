
from groq import Groq
from config import GROQ_API_KEY

client = Groq(api_key=GROQ_API_KEY)

def ask_groq(prompt: str, max_tokens: int = 1024) -> str:
    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[{"role": "user", "content": prompt}],
        max_tokens=max_tokens
    )
    return response.choices[0].message.content

def generate_caption(topic: str, tone: str, platform: str) -> str:
    prompt = f"""Generate a {tone} caption for {platform} about: {topic}

Rules:
- Make it engaging and attention-grabbing
- Match the {tone} tone perfectly
- Optimized for {platform}
- Include 1-2 relevant emojis
- Keep it concise and impactful

Return only the caption, nothing else."""
    return ask_groq(prompt)

def generate_linkedin_post(topic: str, goal: str, length: str) -> str:
    prompt = f"""Write a LinkedIn post about: {topic}

Goal: {goal}
Length: {length}

Rules:
- Start with a strong hook line
- Use short paragraphs (1-2 lines each)
- Add line breaks for readability
- End with a question or call to action
- Professional but conversational tone

Return only the post, nothing else."""
    return ask_groq(prompt, max_tokens=1500)

def generate_youtube_script(topic: str, audience: str, length: str) -> str:
    prompt = f"""Write a YouTube script about: {topic}

Target audience: {audience}
Video length: {length}

Structure:
[HOOK] - First 15 seconds to grab attention
[INTRO] - Brief introduction
[MAIN CONTENT] - Key points with clear sections
[OUTRO] - Call to action and subscribe reminder

Return only the script, nothing else."""
    return ask_groq(prompt, max_tokens=2000)

def generate_viral_hooks(topic: str, platform: str) -> str:
    prompt = f"""Generate 5 viral hook lines for {platform} about: {topic}

Rules:
- Each hook must stop the scroll instantly
- Use curiosity, surprise, or bold statements
- Keep each hook under 15 words
- Number them 1-5

Return only the 5 hooks, nothing else."""
    return ask_groq(prompt)

def generate_hashtags(topic: str, platform: str, mix: str) -> str:
    prompt = f"""Generate hashtags for {platform} about: {topic}
Mix type: {mix}

Rules:
- Generate 15-20 hashtags
- Include broad and niche hashtags based on mix type
- No spaces in hashtags
- Each hashtag on a new line
- Start each with #

Return only the hashtags, nothing else."""
    return ask_groq(prompt)

def generate_content_calendar(niche: str, frequency: str, platforms: str) -> str:
    prompt = f"""Create a 1-week content calendar for:
Niche: {niche}
Posting frequency: {frequency}
Platforms: {platforms}

Format each day like this:
Day 1 - [Day name]
Platform: [platform]
Content type: [type]
Topic: [specific topic idea]
Caption idea: [brief caption]

Return only the calendar, nothing else."""
    return ask_groq(prompt, max_tokens=1500)