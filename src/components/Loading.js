function Loading(props){

  return(
    <section className={`loading ${props.isLoading? 'loading_active' : ''}`}>
      <div className="loading__picture" 
        style={{ 
          backgroundImage: `url(../../${props.loading.image}`, 
          minWidth: `${props.loading.width}`,
          minHeight:`${props.loading.height}`,
        }}/>
      <h3 className="loading__title">{props.loading.name}</h3>
    </section>
  )  
}

export default Loading