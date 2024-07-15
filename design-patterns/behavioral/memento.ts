class Stack1<T> {
    private stack: T[] = [];

    push(item: T) {
        this.stack.push(item)
    }

    pop() {
        return this.stack.pop();
    }

}

class UserActions {
    currentActionType!: 'click' | 'input' | 'dblclick';
    
    private history = new Stack1<{currentActionType: 'click' | 'input' | 'dblclick'}>();
    
    registerEvent(type: 'click' | 'input' | 'dblclick') {
        this.history.push(this.snapshot())
       this.currentActionType = type;
    }

    undo() {
      const previousState = this.history.pop();
      if (previousState) {
        this.currentActionType = previousState.currentActionType;

      }
    }

    private snapshot() {
        return {
            currentActionType: this.currentActionType
        }
    }
}

const actions = new UserActions();
actions.registerEvent('click');
actions.registerEvent('dblclick');
actions.registerEvent('dblclick');
actions.registerEvent('input');

actions.undo();
console.log(actions.currentActionType);


// pahum e state, tule e talis het gnank, orinak hystoryn stanank, undo nmanatip gortsoghutyun anenk(componenti state vercnum enk pahum Bufferi mej heto het gal dran)
