import pic from '/logo.svg'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-around items-center w-full mb-10 pt-3'>
        <img src={pic} alt="logo" className='w-28 object-contain'/>
        <button 
          type="button"
          onClick={() => window.open('https://github.com/Jason-Schneck/summary')}
          className='black_btn' >
          Github
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md: hidden' />
        <span className='purple_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with Summarize AI, an article summarizer
        that transforms lengthy articles into clear summarization
      </h2>

    </header>
  )
}

export default Hero