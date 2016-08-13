%name block_formal_langs_parser_cpp_language
%declare_class {class block_formal_langs_parser_cpp_language}

/* COMMENTS */

comment_list(R) ::= comment_list(A) COMMENT(B) .  {
    A->add_child(B);
    R = A;
}


comment_list(R) ::= COMMENT(A) . {
     R = $this->create_node('comment_list', array( A ));
}
