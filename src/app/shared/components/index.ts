import { Auth0FeatureComponent } from "./auth0-feature.component";
import { Auth0FeaturesComponent } from "./auth0-features.component";
import { CodeSnippetComponent } from "./code-snippet.component";
import { HomeComponent } from "./home.component";
import { NAVIGATION_COMPONENTS } from "./navigation";
import { PageFooterHyperlinkComponent } from "./page-footer-hyperlink.component";
import { PageFooterComponent } from "./page-footer.component";
import { PageLayoutComponent } from "./page-layout.component";
import { PageLoaderComponent } from "./page-loader.component";
import { ToastComponent } from "./toast/toast.component";
import { ConfirmationDialogComponent } from "./dialog/confirm-dialog.component";
import { ConfirmationFreezeDialogComponent } from "./dialog/confirm-freeze-dialog.component";
import { CommentDialogComponent } from "./dialog/comment-dialog.component";
import { TinyMceComponent } from "./editor/tiny-mce.component";
import { CommentComponent } from "src/app/features/public/polylog/comment/comment.component";
import { DeleteDialogComponent } from "./dialog/delete-dialog.component";
import { NewPosterDialogComponent } from "./dialog/new-poster-dialog.component";
import { OttoAdminDialogComponent } from "./dialog/otto-admin-dialog.component";


export const COMPONENTS = [
    ...NAVIGATION_COMPONENTS,
    Auth0FeatureComponent,
    Auth0FeaturesComponent,
    ToastComponent,
    DeleteDialogComponent,
    NewPosterDialogComponent,
    ConfirmationDialogComponent,
    ConfirmationFreezeDialogComponent,
    CommentDialogComponent,
    CommentComponent,
    OttoAdminDialogComponent,
    TinyMceComponent,
    CodeSnippetComponent,
    HomeComponent,
    PageFooterHyperlinkComponent,
    PageFooterComponent,
    PageLayoutComponent,
    PageLoaderComponent
];
