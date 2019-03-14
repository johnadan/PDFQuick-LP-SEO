var treeData = [
            {
                text: "Parent-1",
                nodes: [
                    {
                        text: "Child-1",
                        nodes: [
                            {
                                text: "Grandchild-1"
                            },
                            {
                                text: "Grandchild-2"
                            }
                        ]
                    },
                    {
                        text: "Child-2",
                        nodes: [
                            {
                                text: "Grandchild-1"
                            },
                            {
                                text: "Grandchild-2"
                            }
                        ]
                    }
                ]
            },
            {
                text: "Parent-2",
                nodes: [
                    {
                        text: "Child-1",
                        nodes: [
                            {
                                text: "Grandchild-1"
                            },
                            {
                                text: "Grandchild-2"
                            }
                        ]
                    },
                    {
                        text: "Child-2",
                        nodes: [
                            {
                                text: "Grandchild-1"
                            },
                            {
                                text: "Grandchild-2"
                            }
                        ]
                    }
                ]
            },
            {
                text: "Parent-3",
                nodes: [
                    {
                        text: "Child-1",
                        nodes: [
                            {
                                text: "Grandchild-1"
                            },
                            {
                                text: "Grandchild-2"
                            }
                        ]
                    },
                    {
                        text: "Child-2",
                        nodes: [
                            {
                                text: "Grandchild-1"
                            },
                            {
                                text: "Grandchild-2"
                            }
                        ]
                    }
                ]
            },
            {
                text: "Parent-4",
                nodes: [
                    {
                        text: "Child-1",
                        nodes: [
                            {
                                text: "Grandchild-1"
                            },
                            {
                                text: "Grandchild-2"
                            }
                        ]
                    },
                    {
                        text: "Child-2",
                        nodes: [
                            {
                                text: "Grandchild-1"
                            },
                            {
                                text: "Grandchild-2"
                            }
                        ]
                    }
                ]
            },
            {
                text: "Parent-5",
                nodes: [
                    {
                        text: "Child-1",
                        nodes: [
                            {
                                text: "Grandchild-1"
                            },
                            {
                                text: "Grandchild-2"
                            }
                        ]
                    },
                    {
                        text: "Child-2",
                        nodes: [
                            {
                                text: "Grandchild-1"
                            },
                            {
                                text: "Grandchild-2"
                            }
                        ]
                    }
                ]
            }
        ];
        $('#myTree').treeview({
            data: treeData
        });