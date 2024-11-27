

function Banner(props) {
   const { title,description,numbers} = props;
  return (
    <div>
      <hr/>
        <h1>{title}</h1>
        <p>{description}</p>
        <span>{numbers}</span>
      <hr/>
    </div>
  )
}

export default Banner
