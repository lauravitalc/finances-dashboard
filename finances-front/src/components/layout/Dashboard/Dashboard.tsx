import React from "react";
import { Card } from "../../ui";

const Dashboard: React.FC = () => {
    return (
        <>
            <div className="grid grid-cols-12 gap-4 md:gap-6 m-12">
                <div className="col-span-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Card>
                            <h2 className="card-title">Receita Total</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit suscipit corrupti vero, non quod numquam distinctio? Amet dolorem veritatis cumque et quidem facilis ad temporibus omnis fuga, sed mollitia autem.</p>
                        </Card>
                        <Card>
                            <h2 className="card-title">Gastos Totais</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit suscipit corrupti vero, non quod numquam distinctio? Amet dolorem veritatis cumque et quidem facilis ad temporibus omnis fuga, sed mollitia autem.</p>
                        </Card>
                        <Card>
                            <h2 className="card-title">Saldo Atual</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit suscipit corrupti vero, non quod numquam distinctio? Amet dolorem veritatis cumque et quidem facilis ad temporibus omnis fuga, sed mollitia autem.</p>
                        </Card>
                    </div>

                    <div className="grid grid-cols-12 gap-4 mt-6">
                        <Card className="col-span-12 xl:col-span-5">
                            <h2 className="card-title">Gastos por Categoria</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit suscipit corrupti vero, non quod numquam distinctio? Amet dolorem veritatis cumque et quidem facilis ad temporibus omnis fuga, sed mollitia autem.</p>
                        </Card>
                        <Card className="col-span-12 xl:col-span-7">
                            <h2 className="card-title">Receita vs. Gastos</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit suscipit corrupti vero, non quod numquam distinctio? Amet dolorem veritatis cumque et quidem facilis ad temporibus omnis fuga, sed mollitia autem.</p>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
