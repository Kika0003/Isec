import Taskbar from "../taskbar/taskbar.component";

function Footer({ isMinesweeperOpen }) {
  return (
    <footer>
      <Taskbar 
      isMinesweeperOpen={isMinesweeperOpen}/>
    </footer>
  );
}
export default Footer;
