import {
    Plugin, Function, Autocmd, Command,
} from 'neovim';

// If `Plugin` decorator can be called with options
@Plugin({
    name: 'mdn'
})
class mdnPlugin {
    @Command('LongCommand')
    async longCommand(args) {
        console.log('Output will be routed to $NVIM_NODE_LOG_FILE');
        const bufferName = await this.nvim.buffer.name;
        this.nvim.command('vnew');
        return bufferName;
    }

    @Function('Vsplit', { sync: true })
    splitMe(args, done) {
        this.nvim.command('vsplit');
    }

    @Command('TigrisSSS')
    async clear() {
        const buffer = await this.nvim.buffer;
        this.nvim.outWrite('Clearing\n');

        buffer.clearHighlight({ srcId: -1 });
        DEBUG_MAP.clear();
    }

    @Command('UsePromises')
    promiseExample() {
        return this.nvim.buffer.append(['test','test2'],2).then((buff) => {
            console.log(`Current buffer name is ${name}`);
        });
    }
}

export default mdnPlugin
