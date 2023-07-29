const Navbar = ({notes}) => {
    return (
        <div className="navbar">
            <h1>NoteApp</h1>
            <p>toplam {notes.length} adet not mevcut. </p>
        </div>
    )
}

export default Navbar;