
var ContactForm = React.createClass({
    propTypes: {
      contact: React.PropTypes.object.isRequired
    },

    render: function() {
      return (
        <form className={'contactForm'}>
          <h2>Add a new contact:</h2>
          <input type="text" placeholder="Name" value={this.props.contact.firstName} />
          <input type="text" placeholder="Name" value={this.props.contact.lastName} />
          <input type="text" placeholder="Name" value={this.props.contact.email} />
          <button type="submit"> Submit</button>
        </form>
      )
    },
  })
  