import { Node } from './node';
import { LinkedList } from './linkedList';

class Program {
    private static lList : LinkedList;
    private static main() : void {
        Program.lList = new LinkedList();
        console.log(Program.lList.append(30));
    }
}
