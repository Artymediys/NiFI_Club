pragma ton-solidity >= 0.47.0;

abstract contract Accept {
    /*************
     * MODIFIERS *
     *************/
    modifier accept {
        tvm.accept();
        _;
    }
}