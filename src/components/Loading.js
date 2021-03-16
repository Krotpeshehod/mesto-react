function Loading(props){

  return(
    <section className={`loading ${props.isLoading? 'loading_active' : ''}`}>
      <div className="loading__picture" 
        style={{ 
          backgroundImage: `url(../../${props.loadingData.image}`, 
          minWidth: `${props.loadingData.width}`,
          minHeight:`${props.loadingData.height}`,
        }}/>
      <h3 className="loading__title">{props.loadingData.name}</h3>
    </section>
  )  
}

export default Loading