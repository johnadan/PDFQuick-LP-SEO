var treeData = [
            {
                text: "U.S.A.",
                nodes: [
                    {
                        text: "CMS",
                        nodes: [
                            {
                                text: "W9"
                            },
                            {
                                text: "W8"
                            }
                        ]
                    },
                    {
                        text: "DMV",
                        nodes: [
                            {
                                text: "Eagle Scout"
                            },
                            {
                                text: "941"
                            }
                        ]
                    }
                ]
            },
            {
                text: "U.K.",
                nodes: [
                    {
                        text: "DA Form",
                        nodes: [
                            {
                                text: "1040X"
                            },
                            {
                                text: "W-1"
                            }
                        ]
                    },
                    {
                        text: "DOD",
                        nodes: [
                            {
                                text: "W-2C"
                            },
                            {
                                text: "1065"
                            }
                        ]
                    }
                ]
            },
            {
                text: "Philippines",
                nodes: [
                    {
                        text: "IRS",
                        nodes: [
                            {
                                text: "DS-82"
                            },
                            {
                                text: "VA Form"
                            }
                        ]
                    },
                    {
                        text: "SSA",
                        nodes: [
                            {
                                text: "990-EZ"
                            },
                            {
                                text: "4506-T"
                            }
                        ]
                    }
                ]
            },
            {
                text: "Canada",
                nodes: [
                    {
                        text: "Passport",
                        nodes: [
                            {
                                text: "W-1"
                            },
                            {
                                text: "W9"
                            }
                        ]
                    },
                    {
                        text: "Misc",
                        nodes: [
                            {
                                text: "DS-11"
                            },
                            {
                                text: "DS-4085"
                            }
                        ]
                    }
                ]
            },
            {
                text: "Singapore",
                nodes: [
                    {
                        text: "Immigration",
                        nodes: [
                            {
                                text: "DS-5504"
                            },
                            {
                                text: "DS-64"
                            }
                        ]
                    },
                    {
                        text: "Legal Documents",
                        nodes: [
                            {
                                text: "W8-BEN"
                            },
                            {
                                text: "W-2C"
                            }
                        ]
                    }
                ]
            }
        ];
        $('#myTree').treeview({
            data: treeData
        });