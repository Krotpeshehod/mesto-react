function Loading(props){

  return(
    <section className={`loading ${props.isLoading? 'loading_active' : ''}`}>
      <div className="loading__picture" style={{ backgroundImage: `url(${props.image})`}}></div>
    </section>
  )  
}

export default Loading